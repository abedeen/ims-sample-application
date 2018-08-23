/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { UsersImsUpdateComponent } from 'app/entities/users-ims/users-ims-update.component';
import { UsersImsService } from 'app/entities/users-ims/users-ims.service';
import { UsersIms } from 'app/shared/model/users-ims.model';

describe('Component Tests', () => {
    describe('UsersIms Management Update Component', () => {
        let comp: UsersImsUpdateComponent;
        let fixture: ComponentFixture<UsersImsUpdateComponent>;
        let service: UsersImsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [UsersImsUpdateComponent]
            })
                .overrideTemplate(UsersImsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(UsersImsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UsersImsService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new UsersIms(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.users = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new UsersIms();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.users = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
